<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>

                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="form-group row">
                                <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input type="email" class="form-control" v-model="form.email" required>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input type="password" class="form-control" v-model="form.password" required>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
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
                password: ''
            }
        }
    },
    methods: {
        async submit() {
            try {
                this.$auth.loginWith('local', {
                    data: {
                        email: this.form.email,
                        password: this.form.password
                    }
                })
                this.$router.push('/')
            } catch(error) {
                alert('There was an error. Please try again.')
            }
        }
    }
}
</script>

