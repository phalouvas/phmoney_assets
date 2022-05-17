<script lang="ts">
export default {
  data() {
    return {
      form: {
        invoice_type: this.store.getInvoiceType(),
        active: this.store.props.invoice.active,
        id: this.store.props.invoice.id,
        date_opened: this.store.props.invoice.date_opened,
        billing_id: this.store.props.invoice.billing_id,
        terms: this.store.props.invoice.terms,
        owner_type: this.store.props.invoice.owner_type,
        owner_guid: this.store.props.invoice.owner_guid,
        type: this.store.props.invoice.type.int64_val,
        notes: this.store.props.invoice.notes,
        charge_amt_num: this.store.props.charge_amt_num,
        charge_amt_denom: this.store.props.charge_amt_denom,
        billto_type: this.store.props.invoice.billto_type,
        billto_guid: this.store.props.invoice.billto_guid,
      },
    };
  },

  methods: {
    async submit() {
      if (this.form.billto_guid == null) {
        this.form.type = null;
      }

      if (this.$route.name === "business.invoices.create") {
        await this.store.post(
          `${import.meta.env.VITE_ROOT}business/invoices/store`,
          this.form
        );
      } else {
        await this.store.post(
          `${import.meta.env.VITE_ROOT}business/invoices/update/${
            this.$route.params.invoice_pk
          }`,
          this.form
        );
      }
      this.$router.back();
    },

    async getJobs() {
      let params = {
        owner_guid: this.form.owner_guid,
      };
      try {
        const response = await this.store.axios.get(
          `${import.meta.env.VITE_ROOT}business/invoices/jobs`,
          { params: params }
        );
        this.store.props.jobs = response.data.jobs;
      } catch (error) {
        this.store.errors = error;
      }
    },

    async getBillJobs() {
      let params = {
        billto_guid: this.form.billto_guid,
      };
      try {
        const response = await this.store.axios.get(
          `${import.meta.env.VITE_ROOT}business/invoices/jobs`,
          { params: params }
        );
        this.store.props.billto_jobs = response.data.billto_jobs;
      } catch (error) {
        this.store.errors = error;
      }
    },

    type_change() {
      this.form.owner_guid = null;
      this.form.owner_type = null;
      this.form.billto_guid = null;
      this.form.billto_type = null;
      this.store.props.jobs = [];
      this.store.props.billto_jobs = [];
    },
  },
};
</script>

<template>
  <form @submit.prevent="submit" class="p-6">
    <div class="p-3 border">
      <select
        v-model="form.invoice_type"
        name="invoice_type"
        id="invoice_type"
        :disabled="store.props.invoice.guid"
        @change="type_change"
        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
      >
        <option>Invoice</option>
        <option>Bill</option>
        <option>Voucher</option>
      </select>

      <div class="font-semibold text-md">{{ form.invoice_type }} Information</div>
      <div class="flex flex-wrap gap-2">
        <form-label for="radio_invoice" :value="form.invoice_type" />
        <form-input
          type="radio"
          id="radio_invoice"
          name="radio_type"
          value="0"
          :checked="form.type == '0'"
          v-model="form.type"
        />
        <form-label for="radio_credit_note" value="Credit Note" />
        <form-input
          type="radio"
          id="radio_credit_note"
          name="radio_type"
          value="1"
          :checked="form.type == '1'"
          v-model="form.type"
        />
      </div>

      <div class="flex flex-wrap gap-2">
        <div>
          <form-label for="active" value="Active" />
          <form-checkbox id="active" v-model:checked="form.active" />
        </div>

        <div>
          <form-label for="id" :value="`${form.invoice_type} ID`" />
          <form-input id="id" type="text" v-model="form.id" />
        </div>

        <div>
          <form-label for="date_opened" value="Date Opened" />
          <form-input id="date_opened" type="date" v-model="form.date_opened" required />
        </div>
      </div>

      <div class="font-semibold text-md">Billing Information</div>
      <div class="flex flex-wrap gap-2">
        <div v-if="form.invoice_type === 'Invoice'">
          <form-label for="customer" value="Customer" />
          <select
            id="customer"
            v-model="form.owner_guid"
            @change="
              form.owner_type = 2;
              getJobs();
            "
            class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
          >
            <option
              v-for="owner in store.props.customers"
              :key="owner.guid"
              :value="owner.guid"
            >
              {{ owner.name }}
            </option>
          </select>
        </div>

        <div v-if="form.invoice_type === 'Bill'">
          <form-label for="vendor" value="Vendor" />
          <select
            id="customer"
            v-model="form.owner_guid"
            @change="
              form.owner_type = 4;
              getJobs();
            "
            class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
          >
            <option
              v-for="owner in store.props.vendors"
              :key="owner.guid"
              :value="owner.guid"
            >
              {{ owner.name }}
            </option>
          </select>
        </div>

        <div v-if="form.invoice_type === 'Voucher'">
          <form-label for="employee" value="Employee" />
          <select
            id="customer"
            v-model="form.owner_guid"
            @change="form.owner_type = 5"
            class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
          >
            <option
              v-for="owner in store.props.employees"
              :key="owner.guid"
              :value="owner.guid"
            >
              {{ owner.username }}
            </option>
          </select>
        </div>

        <div v-if="form.invoice_type === 'Invoice' || form.invoice_type === 'Bill'">
          <form-label for="job" value="Job" />
          <select
            id="customer"
            v-model="form.owner_guid"
            @change="form.owner_type = 3"
            class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
          >
            <option v-for="job in store.props.jobs" :key="job.guid" :value="job.guid">
              {{ job.name }}
            </option>
          </select>
        </div>

        <div>
          <form-label for="billing_id" value="Billing ID" />
          <form-input id="billing_id" type="text" v-model="form.billing_id" />
        </div>

        <div>
          <form-label for="terms" value="Terms" />
          <select
            id="customer"
            v-model="form.terms"
            class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
          >
            <option
              v-for="billterm in store.props.billterms"
              :key="billterm.guid"
              :value="billterm.guid"
            >
              {{ billterm.name }}
            </option>
          </select>
        </div>
      </div>

      <div
        class="font-semibold text-md"
        v-if="form.invoice_type === 'Bill' || form.invoice_type === 'Voucher'"
      >
        Default Chargeback Project
      </div>
      <div
        class="flex flex-wrap gap-2"
        v-if="form.invoice_type === 'Bill' || form.invoice_type === 'Voucher'"
      >
        <div>
          <form-label for="billto_customer" value="Customer" />
          <select
            id="billto_customer"
            v-model="form.billto_guid"
            @change="
              form.billto_type = 2;
              getBillJobs();
            "
            class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
          >
            <option :value="null">- Select a customer -</option>
            <option
              v-for="job in store.props.customers"
              :key="job.guid"
              :value="job.guid"
            >
              {{ job.name }}
            </option>
          </select>
        </div>

        <div>
          <form-label for="billto_job" value="Job" />
          <select
            id="billto_job"
            v-model="form.billto_guid"
            @change="form.billto_type = 3"
            class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
          >
            <option :value="null">- Select a job -</option>
            <option
              v-for="job in store.props.billto_jobs"
              :key="job.guid"
              :value="job.guid"
            >
              {{ job.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="font-semibold text-md">Notes</div>
      <div class="flex flex-wrap gap-2">
        <div>
          <textarea
            v-model="form.notes"
            class="mt-1 p-3 w-full border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
            id="notes"
            name="notes"
          />
        </div>
      </div>
    </div>

    <div class="flex gap-2 items-center justify-end mt-4">
      <form-button
        :class="{ 'opacity-25': form.processing || form.owner_guid == null }"
        :disabled="form.processing || form.owner_guid == null"
        title="Save"
      >
        <span class="material-icons-outlined"> save </span>
      </form-button>
    </div>
  </form>
</template>
