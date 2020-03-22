<template>
    <div>
        <br>
        <v-card
                class="mx-auto"
                max-width="85%"
        >
            <v-card-text>
                <div>Page Music Vue</div>
                <p class="display-1 text--primary">
                    Music • Vue
                </p>
                <p>about us</p>
                <div class="text--primary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>
                    Impedit reprehenderit sit tempora voluptates! Asperiores cupiditate dolorem doloribus, fugiat id in magni modi mollitia officiis quo quod reiciendis tempora ullam voluptatum?
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>
                    Aspernatur consequatur culpa, dolorem doloribus excepturi facilis ipsa itaque minus, nobis omnis possimus provident quos repellat sed sint, tenetur totam unde veniam.
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                        text
                        color="deep-purple accent-4"
                >
                    Learn More
                </v-btn>
            </v-card-actions>
        </v-card>
        <div class="d-flex align-center" style="padding: 5% 0 0 50%">
            <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2" contain
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                    transition="scale-transition"
                    width="90"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
        props: {
        },
        data: () => ({

        }),
        computed: { // getters & setters
        },
        methods: {
        },
        // lifecycle
        mounted() {
        }
    }
</script>

<style>
</style>
