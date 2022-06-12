import { reactive } from 'vue'
import axios from 'axios'
import moment from 'moment';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
axios.get(`sanctum/csrf-cookie`);

export const store = reactive({
  props: [],
  user: null,
  processing: false,
  errors: null,
  axios: axios,
  responseURL: null,
  report_settings: {
    "id": null,
    "team_id": null,
    "name": null,
    "type": null,
    "params": {},
    "created_at": null,
    "updated_at": null
  },
  accounts_filter: {
    name: null,
    code: null,
    type: null,
    level: null,
  },
  transactions_filter: {
    account_pk: null,
    page: 1,
    memo: null,
    description: null,
    num: null,
    date_start: null,
    date_end: null,
},

  /**
   * Send axios get request
   * @param route string The url
   * @param params any The params of the request
   */
  async get(route: string, params: any = null) {
    this.processing = true;

    try {
      const response = await axios.get(route, { params: params });
      this.responseURL = response.request.responseURL;
      this.props = response.data;
      this.processing = false;
      return response.data;
    } catch (error) {
      this.errors = error;
      this.processing = false;
      return error;
    }

  },

  /**
   * Send axios put request
   * @param route string The url
   * @param params any The params of the request
   * @param reload boolean Reload last get call
   */
  async put(route: string, params: any = null, reload: boolean = false) {
    this.processing = true;

    try {
      const response = await axios.put(route, params);
      this.props = response.data;
      if (reload) {
        this.get(this.responseURL);
      }
    } catch (error) {
      this.errors = error;
    }

    this.processing = false;
  },

  /**
   * Send axios post request
   * @param route string The url
   * @param params any The params of the request
   * @param reload boolean Reload last get call
   */
  async post(route: string, params: any = null, reload: boolean = false) {
    this.processing = true;

    try {
      const response = await axios.post(route, params);
      this.props = response.data;
      if (reload) {
        this.get(this.responseURL);
      }
    } catch (error) {
      this.errors = error;
    }

    this.processing = false;
  },

  /**
   * Send axios delete request
   * @param route string The url
   * @param reload boolean Reload last get call
   * @returns 
   */
  async delete(route: string, params: any = null, reload: boolean = false) {
    this.processing = true;

    await axios.delete(route, { data: params })
      .then((response) => {
        if (reload) {
          this.get(this.responseURL);
        }
      })
      .catch((error) => {
        this.errors = error;
      })
      .finally(() => {
        this.processing = false;
      });
  },

  /**
   * Convert a date time string to human readable
   * 
   * @param date_time string
   * @returns string
   */
  convert_date(date_time: string): string {
    return moment(date_time).utc().format("YYYY-MM-DD");
  },

  /**
   * Calculate invoice name from type
   * 
   * @returns string
   */
  getInvoiceType(invoice = null) {
    if (!invoice) {
      invoice = this.props.invoice;
    }
    if (invoice) {
      if (invoice.customer) {
        return "Invoice";
      }

      if (invoice.vendor) {
        return "Bill";
      }

      if (invoice.employee) {
        return "Voucher";
      }

      if (invoice.job) {
        if (invoice.job.customer) {
          return "Invoice";
        }
        if (invoice.job.vendor) {
          return "Bill";
        }
      }
    }

    return "Invoice";
  },

  async loadUser() {
    const response = await axios.get(`${import.meta.env.VITE_ROOT}user`)
      .then((response) => {
        this.user = response.data;
      })
      .catch((error) => {
        this.user = null;
      });
    return this.user
  },

})
