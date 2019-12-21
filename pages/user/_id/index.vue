<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <h5>Client info {{ client.email }}</h5>
            <table class="table table-bordered table-striped">

                <tbody>
                    <tr>
                        <th>ID</th><td>{{ client.id }}</td>
                    </tr>
                    <tr>
                        <th>Email</th><td>{{ client.email }}</td>
                    </tr>
                    <tr>
                        <th>Name</th><td>{{ client.client_profile.name }}</td>
                    </tr>
                    <tr>
                        <th>Surname</th><td>{{ client.client_profile.surname }}</td>
                    </tr>
                    <tr>
                        <th>Birthday</th><td>{{ client.client_profile.birthday }}</td>
                    </tr>
                    <tr>
                        <th>Phone</th><td>{{ client.client_profile.phone }}</td>
                    </tr>
                    <tr>
                        <th>Address</th><td>{{ client.client_profile.address }}</td>
                    </tr>
                    <tr>
                        <th>Country</th><td>{{ client.client_profile.country }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>


export default {
    middleware: 'user-only',
    async asyncData(context) {
        let response = await context.$axios.get('user/clients/'+context.params.id);
        let client = response.data.client;
        return {
            client
        }
    }
}
</script>