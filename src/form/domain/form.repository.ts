import { Form } from "@form/domain"

export interface FormRepository {
    create(form: Form): Promise<Form>
}