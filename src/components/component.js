import axios from "axios";
import useValidate from "@vuelidate/core";
// eslint-disable-next-line no-unused-vars
import {
    required,
    email
} from "@vuelidate/validators";

export default {
    name: 'SetInitial',
    setup() {
        return {
            v$: useValidate()
        }
    },
    data() {
        return {
            // v$: useValidate(),
            totalcharacter: 0,
            count: 0,
            showLatLong: true,
            method: null,
            users: null,
            action: null,
            form: {
                id: '',
                name: '',
                username: '',
                email: '',
                phone: '',
                adresa: '',
                city: '',
                zip: '',
                latitude: '',
                longitude: ''
            },
        }
    },
    validations() {
        return {
            form: {
                name: {
                    required
                },
                username: {
                    required
                },
                email: {
                    required,
                    email
                },
                phone: {
                    required
                },
                adresa: {
                    required
                },
                city: {
                    required
                },
                zip: {
                    required
                },
            },
        }
    },
    async created() {
        await axios.get('http://localhost:3000/users')
            .then(response => {
                this.users = response.data;
                this.count = this.count = response.data.length;
            })
            .catch((e) => {
                console.error(e)
            })
    },
    watch: {
        showLatLong: {
            handler(value) {
                console.log(value);
                if (value === false) {
                    this.showContainer()
                }
            },
            immediate: true
        },
        form: {
            handler(value) {
                this.setPlace(value);
            },
            deep: true,
            immediate: true
        }
    },
    methods: {
        async fetch() {
            await axios.get('http://localhost:3000/users')
                .then(response => {
                    this.users = response.data;
                    this.count = response.data.length
                })
                .catch((e) => {
                    console.error(e)
                })
        },
        async submit() {
            // console.log(this.method);

            if (this.method === 'delete') {
                await axios({
                        method: this.method,
                        url: this.action,
                    })
                    .then(() => {
                        this.fetch();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else if (this.method === 'put') {
                await axios({
                        method: this.method,
                        url: this.action,
                        data: this.form
                    })
                    .then(() => {
                        this.form = {
                            id: '',
                            name: '',
                            username: '',
                            email: '',
                            phone: '',
                            adresa: '',
                            city: '',
                            zip: '',
                            latitude: '',
                            longitude: '',
                        };
                        this.acting = null;
                        this.inputet = null;
                    })
                    .catch((error) => {
                        console.log(error);
                    }).finally(() => {
                        this.fetch();
                    });
            } else if (this.method === 'post') {
                // console.log(this.v$.Validate());
                await axios({
                        method: this.method,
                        url: this.action,
                        data: this.form
                    })
                    .then(() => {
                        this.form = {
                            id: '',
                            name: '',
                            username: '',
                            email: '',
                            phone: '',
                            adresa: '',
                            city: '',
                            zip: '',
                            latitude: '',
                            longitude: '',
                        };
                        this.acting = null;
                        this.inputet = null;
                    })
                    .catch((error) => {
                        console.log(error);
                    }).finally(() => {
                        this.fetch();
                    });
            }
        },
        createuser() {
            this.form.id = this.count + 1;

            // this.acting = true;
            this.method = 'post';
            this.action = 'http://localhost:3000/users';
        },

        async deleteuser(id) {
            this.method = 'delete';
            this.action = `http://localhost:3000/users/${id}`;
            this.submit();
        },
        async edituser(user) {
            let modalHidden = this.$refs.modal;
            // eslint-disable-next-line no-undef
            $(modalHidden).modal('show')
            this.method = 'put';
            this.action = `http://localhost:3000/users/${user.id}`;
            this.form.id = user.id;
            this.form.name = user.name;
            this.form.username = user.username;
            this.form.email = user.email;
            this.form.phone = user.phone;
            this.form.adresa = user.adresa;
            this.form.city = user.city;
            this.form.zip = user.zip;
            this.form.latitude = user.latitude;
            this.form.longitude = user.longitude;
        },
        handleChange(event) {
            if (event.target.value.length === 0) {
                this.showContainer();
            }
        },
        showContainer() {
            let thisContainer = document.querySelector('.pac-container');
            thisContainer.style.zIndex = '100000000'
            thisContainer.style.display = 'block'
        },
        hideContainer() {
            let thisContainer = document.querySelector('.pac-container');
            thisContainer.style.zIndex = '10'
            thisContainer.style.display = 'none'
        },
        // eslint-disable-next-line no-unused-vars
        async setPlace(place) {
            
            if (place.geometry) {

                this.hideContainer();

                // eslint-disable-next-line no-undef
                let latitude = place.geometry.viewport.Ra.lo
                let longitude = place.geometry.viewport.ub.lo

                let city = place.vicinity;
                // this data was optional
                let adresa = place.name;
                // let country = place.address_components.slice(-1)[0].long_name;
                this.form.adresa = adresa;

                this.form.city = city;
                this.form.latitude = latitude;
                this.form.longitude = longitude;
            }
        },
    }
}