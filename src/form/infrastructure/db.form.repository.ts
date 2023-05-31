import { 
    Entity, 
    BaseEntity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm"

import { Form, FormRepository } from "@form/domain"


@Entity({ name: "forms" })
export class FormEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    fullname!: string

    @Column()
    country!: string
}

export class DBFormRepository implements FormRepository {

    async create(form: Form) {
        const newForm = new FormEntity()

        newForm.fullname = form.fullname
        newForm.country = form.country

        form.id = (await (newForm.save())).id

        return form
    }
    
}