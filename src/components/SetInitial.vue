<template>
  <div class="row">
    <div class="container-fluid">
      <div class="row w-75 mx-auto mt-5">
        <div class="col-12">
          <div class="row justify-content-end mb-3">
            <div class="col-2 px-0">
              <button type="button" class="btn blue-button rounded-3 w-100 p-2" data-bs-toggle="modal"
                data-bs-target="#exampleModal" @click="createuser"><i class="bi bi-plus-lg"></i> Create
                a new User
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="row my-3">
                <div class="col-2">
                  <p class="tittlesection mb-0">#</p>
                </div>
                <div class="col-3">
                  <p class="tittlesection mb-0">Name</p>
                </div>
                <div class="col-3">
                  <p class="tittlesection mb-0">Email</p>
                </div>
                <div class="col-2">
                  <p class="tittlesection mb-0">Phone</p>
                </div>
                <div class="col-2">
                  <p class="tittlesection mb-0 text-end">Actions</p>
                </div>
              </div>
              <div v-for="user in users" :key="user.id" class="border row border-1 rounded-3 py-2 my-2">
                <div class="col-2 my-auto">
                  <p class="mb-0">
                    {{ user.id }}
                  </p>
                </div>
                <div class="col-3 my-auto">
                  <p class="mb-0">
                    {{ user.name }}
                  </p>
                </div>
                <div class="col-3 my-auto">
                  <p class="mb-0">
                    {{ user.email }}
                  </p>
                </div>
                <div class="col-2 my-auto">
                  <p class="mb-0">
                    {{ user.phone }}
                  </p>
                </div>
                <div class="col-2 my-auto">
                  <div class="row justify-content-end">
                    <div class="col-2 px-0">
                      <button title="button-edit" @click="edituser(user)" class="bg-transparent border-0 color-icon">
                        <i class="bi bi-pencil-fill"></i>
                      </button>
                    </div>
                    <div class="col-2 ps-0">
                      <button title="button-delete" @click="deleteuser(user.id)"
                        class="bg-transparent border-0 color-icon">
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
      ref="modal">
      <div class="modal-dialog modal-xl">
        <form @submit.prevent="submit">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title margin-left" id="exampleModalLabel">New User Info</h5>
              <button type="button" class="rounded-circle border-0 backgray" data-bs-dismiss="modal" aria-label="Close">
                <i class="bi bi-x-lg colorgray"></i>
              </button>
            </div>
            <div class="modal-body px-5 py-2">
              <div class="row">
                <div class="col-6">
                  <div class="row row-cols-1">
                    <input type="hidden" ref="id" v-model="form.id">
                    <div class="col">
                      <div class="mb-3">
                        <label for="name" class="col-form-label">Full Name</label>
                        <input type="text" v-model="v$.form.name.$model"
                          class="form-control form-control-lg border-color shadow-none" id="name">
                        <div class="input-errors" v-for="(error, index) of v$.form.name.$errors" :key="index">
                        <div class="error-msg">{{ error.$message }}</div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-3">
                        <label for="username" class="col-form-label">Username</label>
                        <input type="text" v-model="v$.form.username.$model"
                          class="form-control form-control-lg border-color shadow-none" id="username">
                        <div class="input-errors" v-for="(error, index) of v$.form.username.$errors" :key="index">
                        <div class="error-msg">{{ error.$message }}</div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-3">
                        <label for="email" class="col-form-label">Email</label>
                        <input type="email" v-model="v$.form.email.$model"
                          class="form-control form-control-lg border-color shadow-none" id="email">
                        <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
                        <div class="error-msg">{{ error.$message }}</div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-3">
                        <label for="phone" class="col-form-label">Phone</label>
                        <input type="text" v-model="v$.form.phone.$model"
                          class="form-control form-control-lg border-color shadow-none" id="phone">
                        <div class="input-errors" v-for="(error, index) of v$.form.phone.$errors" :key="index">
                        <div class="error-msg">{{ error.$message }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row row-cols-1">
                    <div class="col">
                      <div class="mb-3">
                        <div class="row">
                          <div class="col-6">
                            <label for="adresa" class="col-form-label">Adresa</label>
                          </div>
                          <div class="col-6 my-auto">
                            <div class="row">
                              <div class="col-2 position-relative">
                                <input type="checkbox" class="sizecheck border-0 position-absolute" id="usedirection"
                                  @click='showLatLong = !showLatLong'>
                              </div>
                              <div class="col-10">
                                <label for="usedirection">Use Google Location</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div v-show="showLatLong">
                        <input type="text" v-model="v$.form.adresa.$model" ref="autocomplete" class="form-control form-control-lg border-color shadow-none" id="adresa">
                        <div class="input-errors" v-for="(error, index) of v$.form.adresa.$errors" :key="index">
                        <div class="error-msg">{{ error.$message }}</div>
                        </div>
                        </div>

                        <div v-show="!showLatLong">
                        <!-- @keypress.enter.prevent -->
                        
                        <GMapAutocomplete 
                        placeholder="Write your address"
                        class="form-control form-control-lg border-color shadow-none"
                        ref="autocomplete" 
                        @change="handleChange"
                        @place_changed="setPlace"
                        >
                        </GMapAutocomplete>
                       
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-3">
                        <label for="city" class="col-form-label">City</label>
                        <input type="text" v-model="v$.form.city.$model"
                          class="form-control form-control-lg border-color shadow-none" id="city">
                        <div class="input-errors" v-for="(error, index) of v$.form.city.$errors" :key="index">
                        <div class="error-msg">{{ error.$message }}</div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-3">
                        <label for="zip" class="col-form-label">Zip</label>
                        <input type="text" v-model="v$.form.zip.$model"
                          class="form-control form-control-lg border-color shadow-none" id="zip">
                        <div class="input-errors" v-for="(error, index) of v$.form.zip.$errors" :key="index">
                        <div class="error-msg">{{ error.$message }}</div>
                        </div>
                      </div>
                    </div>
                    <div class="col" v-if="!showLatLong">
                      <div class="row">
                        <div class="col-6">
                          <div class="mb-3">
                            <label for="latitude" class="col-form-label">Latitude</label>
                            <input type="text" v-model="form.latitude"
                              class="form-control form-control-lg border-color shadow-none" id="latitude">
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="mb-3">
                            <label for="longitude" class="col-form-label">Longitude</label>
                            <input type="text" v-model="form.longitude"
                              class="form-control form-control-lg border-color shadow-none" id="longitude">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div class="row w-100 justify-content-end">
                <div class="col-2 me-3">
                  <button 
                  type="submit" 
                  class="btn blue-button w-100 p-2 rounded-3"
                  :disabled="v$.form.$invalid"
                  data-bs-dismiss="modal">Save</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./component"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tittlesection {
  font-size: 1.2rem;
  font-weight: 500;
}

.color-icon {
  color: #CCD2E3;
}

.blue-button {
  background-color: #3C81FC;
  color: white;
}

.backgray {
  background-color: #F4F7FB !important;
  /* color: white !important; */
  margin: -0.5rem 2.5rem -0.5rem auto !important;
}

.colorgray {
  color: #CCD2E3 !important;
}

.margin-left {
  margin-left: 2rem;
  font-weight: 700;
  font-size: 1.5rem;
}

.border-color {
  border-color: #E7EAF3;
}

[v-cloak] {
  display: none;
}


.sizecheck {
  width: 45%;
  height: 100%;
}

.pac-container {
  z-index: 1000000;
}
</style>
