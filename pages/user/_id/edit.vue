<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <h5>Client edit</h5>
            <form @submit.prevent="updateClient">
                <div class="form-group">
                    <label for="email" class="col-form-label">E-Mail Address</label>
                    <input type="email" class="form-control" v-model="client.email" required>
                </div>

                <div class="form-group">
                    <label for="name" class="col-form-label">Name</label>
                    <input class="form-control" v-model="client.client_profile.name" required>
                </div>

                <div class="form-group">
                    <label for="surname" class="col-form-label">Surname</label>
                    <input class="form-control" v-model="client.client_profile.surname" required>
                </div>

                <div class="form-group">
                    <label for="birthday" class="col-form-label">Date of birth</label>
                    <input class="form-control"  type="date" v-model="client.client_profile.birthday" pattern="\d{4}-\d{2}-\d{2}" required>
                </div>

                <div class="form-group">
                    <label for="phone" class="col-form-label">Phone</label>
                    <input class="form-control" v-model="client.client_profile.phone" required>
                </div>

                <div class="form-group">
                    <label for="address" class="col-form-label">Address</label>
                    <input class="form-control" v-model="client.client_profile.address" required>
                </div>

                <div class="form-group">
                    <label for="country" class="col-form-label">Country</label>
                    <input class="form-control" v-model="client.client_profile.country" required>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    middleware: 'user-only',
    async asyncData({$axios, params}) {
        let response = await $axios.get('user/clients/'+params.id);
        let client = response.data.client;
        return {
            client
        }
    },
    methods: {
        async updateClient(client) {
            await this.$axios.patch('user/clients/'+this.client.id+'/edit', {
                email: this.client.email,
                name: this.client.client_profile.name,
                surname: this.client.client_profile.surname,
                birthday: this.client.client_profile.birthday,
                phone: this.client.client_profile.phone,
                address: this.client.client_profile.address,
                country: this.client.client_profile.country
            })
            alert('Client with name ' +this.client.client_profile.name+' successfully updated!')
        }
    }
}
</script>