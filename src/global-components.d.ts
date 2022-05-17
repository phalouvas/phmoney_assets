import AppLayout from "@/layouts/AppLayout.vue";
import FormLayout from "@/layouts/FormLayout.vue";
import ReportLayout from "@/layouts/ReportLayout.vue";
import FormInput from "./common/form/FormInput.vue"
import FormLabel from "./common/form/FormLabel.vue"
import FormCheckbox from "./common/form/FormCheckbox.vue"
import FormButton from "./common/form/FormButton.vue"
import FormSecondaryButton from "./common/form/FormSecondaryButton.vue"
import AmountFinancial from "./common/form/AmountFinancial.vue"
import Pagination from "./common/Pagination.vue"
import FormDateStart from "./common/form/FormDateStart.vue"
import FormDateEnd from "./common/form/FormDateEnd.vue"

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppLayout: typeof AppLayout,
    FormLayout: typeof FormLayout,
    ReportLayout: typeof ReportLayout,
    FormInput: typeof FormInput,
    FormLabel: typeof FormLabel,
    FormCheckbox: typeof FormCheckbox,
    FormButton: typeof FormButton,
    FormSecondaryButton: typeof FormSecondaryButton,
    AmountFinancial: typeof AmountFinancial,
    Pagination: typeof Pagination,
    FormDateStart: typeof FormDateStart,
    FormDateEnd: typeof FormDateEnd,
  }
}