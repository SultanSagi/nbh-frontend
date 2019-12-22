<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <h5>Clients list</h5>
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>#</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="client in $auth.user.clients" :key="client.id">
                        <td>{{ client.id }}</td>
                        <td>{{ client.email }}</td>
                        <td>{{ client.client_profile.name }}</td>
                        <td>
                            <nuxt-link :to="`/user/${client.id}`">View</nuxt-link>
                        </td>
                        <td>
                            <nuxt-link :to="`/user/${client.id}/edit`">Edit</nuxt-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>