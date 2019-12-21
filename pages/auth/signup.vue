<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Sign up</div>

                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="form-group row">
                                <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input type="email" class="form-control" v-model="form.email">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input type="password" class="form-control" v-model="form.password">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="name" class="col-sm-4 col-form-label text-md-right">Name</label>

                                <div class="col-md-6">
                                    <input type="text" class="form-control" v-model="form.name">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="surname" class="col-sm-4 col-form-label text-md-right">Surname</label>

                                <div class="col-md-6">
                                    <input type="text" class="form-control" v-model="form.surname">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="birthday" class="col-sm-4 col-form-label text-md-right">Date of birth</label>

                                <div class="col-md-6">
                                    <input type="text" class="form-control" v-model="form.birthday">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="phone" class="col-sm-4 col-form-label text-md-right">Phone</label>

                                <div class="col-md-6">
                                    <input type="text" class="form-control" v-model="form.phone">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="address" class="col-sm-4 col-form-label text-md-right">Address</label>

                                <div class="col-md-6">
                                    <input type="text" class="form-control" v-model="form.address">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="country" class="col-sm-4 col-form-label text-md-right">Country</label>

                                <div class="col-md-6">
                                    <input type="text" class="form-control" v-model="form.country">
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data () {
        return {
            form: {
                email: '',
                password: '',
                name: '',
                surname: '',
                birthday: '',
                phone: '',
                address: '',
                country: ''
            }
        }
    },
    methods: {
        async submit() {
            let isUser = (this.form.name === '' && this.form.surname === '')
            let data = isUser ? { email: this.form.email, password: this.form.password } : this.form

            try {
                await this.$axios.post('user/register', data)

                this.$auth.loginWith('local', {
                    data: {
                        email: this.form.email,
                        password: this.form.password
                    }
                })
            } catch(error) {
                alert('There was an error. Please try again.')
            }
        }
    }
}
</script>