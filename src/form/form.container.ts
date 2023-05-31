import { FormRepository } from "@form/domain"
import { CreateForm, createForm } from "@form/application"
import { DBFormRepository } from "@form/infrastructure"

export class FormContainer {
    private repository: FormRepository = new DBFormRepository()
    
    createForm: CreateForm = createForm(this.repository)
}