import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import AppLayout from "./layouts/AppLayout.vue"
import FormLayout from "./layouts/FormLayout.vue"
import ReportLayout from "./layouts/ReportLayout.vue"
import FormInput from "./common/form/FormInput.vue"
import FormLabel from "./common/form/FormLabel.vue"
import FormCheckbox from "./common/form/FormCheckbox.vue"
import FormButton from "./common/form/FormButton.vue"
import FormSecondaryButton from "./common/form/FormSecondaryButton.vue"
import FormDialogModal from "./common/form/FormDialogModal.vue"
import AmountFinancial from "./common/form/AmountFinancial.vue"
import Pagination from "./common/Pagination.vue"
import FormDateStart from "./common/form/FormDateStart.vue"
import FormDateEnd from "./common/form/FormDateEnd.vue"

const app = createApp(App)

import {store} from './helpers/store'
app.config.globalProperties.store = store;

import moment from 'moment';
app.config.globalProperties.moment = moment;

app.component("AppLayout", AppLayout)
app.component("FormLayout", FormLayout)
app.component("ReportLayout", ReportLayout)
app.component("FormInput", FormInput)
app.component("FormLabel", FormLabel)
app.component("FormCheckbox", FormCheckbox)
app.component("FormButton", FormButton)
app.component("FormSecondaryButton", FormSecondaryButton)
app.component("FormDialogModal", FormDialogModal)
app.component("AmountFinancial", AmountFinancial)
app.component("Pagination", Pagination)
app.component("FormDateStart", FormDateStart)
app.component("FormDateEnd", FormDateEnd)

app.use(router)

app.mount('#app_gnucash_component')
