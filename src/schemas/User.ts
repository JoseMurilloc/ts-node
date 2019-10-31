import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  email?: string
  firstname?: string
  lastname?: string

  fullname(): string
}

const UserSchema: Schema = new Schema({
  email: String,
  firstname: String,
  lastname: String
}, {
  timestamps: true
})

UserSchema.methods.fullname = function (): string {
  return this.firstname + this.lastname
}

export default model<UserInterface>('User', UserSchema)
