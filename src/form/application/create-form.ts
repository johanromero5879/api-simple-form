import { Form, FormRepository } from "@form/domain"

export interface CreateForm {
    (form: Form): Promise<Form>
}


export const createForm = (repository: FormRepository) => {
    const exec: CreateForm = async (form: Form) => {
        return repository.create(form)
    }

    return exec
}