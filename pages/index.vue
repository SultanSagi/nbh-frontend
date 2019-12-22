<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div v-if="$auth.loggedIn && $auth.user.role == 'client'">
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Client information</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Name: {{ $auth.user.client_profile.name }}</li>
                  <li class="list-group-item">Surname: {{ $auth.user.client_profile.surname }}</li>
                  <li class="list-group-item">Date of birth: {{ $auth.user.client_profile.birthday }}</li>
                  <li class="list-group-item">Email: {{ $auth.user.email }}</li>
                  <li class="list-group-item">Phone number: {{ $auth.user.client_profile.phone }}</li>
                  <li class="list-group-item">Address: {{ $auth.user.client_profile.address }}</li>
                  <li class="list-group-item">Country: {{ $auth.user.client_profile.country }}</li>
                </ul>
              </div>
            </div>
            <div v-else-if="$auth.loggedIn && $auth.user.role == 'user'">
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
                                <nuxt-link :to="`/user/${client.id}`">View detail</nuxt-link>
                            </td>
                            <td>
                                <nuxt-link :to="`/user/${client.id}/edit`">Edit</nuxt-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else>
            </div>
        </div>
    </div>
</div>
</template>
