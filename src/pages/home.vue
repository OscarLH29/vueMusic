<template>
    <v-container>
        <v-col style="width: 50%">
        <v-card class="d-inline-block mx-auto mainPhoto">
            <v-container>
                <v-row justify="space-between">
                    <v-col cols="auto">
                        <v-img
                                height="350"
                                width="530"
                                src="https://vignette.wikia.nocookie.net/drama/images/c/c4/Loopy1.jpeg/revision/latest/top-crop/width/220/height/220?cb=20181107183541&path-prefix=es"
                        ></v-img>
                    </v-col>

                    <v-col>
                        <div class="title">
                            Loopy
                        </div>
                        <br>
                        <div class="subtitle-1">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus doloribus esse fuga itaque maxime molestias nam natus nemo officiis omnis pariatur placeat quasi, quos rerum. Adipisci expedita reprehenderit vel.
                        </div>
                        <br><hr><br>
                        <div>
                            <v-btn x-large :color="Pcolor" block>
                                See more
                            </v-btn>
                            <v-spacer></v-spacer>
                            <br>
                            <v-btn large :color="Scolor" block>
                                See albums
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        </v-col>
        <v-col class="colCard">
            <v-card class="d-inline-block mx-auto cardRight">
                <v-container>
                    <v-row justify="space-between">
                        <v-col>
                            <div class="title">
                                Aczino
                            </div>
                            <br>
                            <div class="subtitle-1">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atias nam natus nemo officiis omnis pariatur placeat quasi, quos rerum. Adipisci expedita reprehenderit vel.
                            </div>
                            <hr><br>
                            <div>
                                <v-btn small :color="Pcolor" block>
                                    See more
                                </v-btn>
                                <v-spacer></v-spacer>
                                <br>
                                <v-btn small :color="Scolor" block>
                                    See albums
                                </v-btn>
                            </div>
                        </v-col>
                        <v-col cols="auto">
                            <v-img
                                    height="300"
                                    width="200"
                                    src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto:good/redbullcom/2020/2/20/h2ptylddyw4fojhmpzfb/aczino-se-retira"
                            ></v-img>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-col>
        <v-col class="colCard2">
            <v-card class="d-inline-block mx-auto cardRight">
                <v-container>
                    <v-row justify="space-between">
                        <v-col cols="auto">
                            <v-img
                                    height="300"
                                    width="200"
                                    src="https://i.scdn.co/image/7b9f8b23be11c74e0113db208bf420587d25be10"
                            ></v-img>
                        </v-col>
                        <v-col>
                            <div class="title">
                                Bipo Montana
                            </div>
                            <br>
                            <div class="subtitle-1">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atias nam natus nemo officiis omnis pariatur placeat quasi, quos rerum. Adipisci expedita reprehenderit vel.
                            </div>
                            <hr><br>
                            <div>
                                <v-btn small :color="Pcolor" block>
                                    See more
                                </v-btn>
                                <v-spacer></v-spacer>
                                <br>
                                <v-btn small :color="Scolor" block>
                                    See albums
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-col>
    </v-container>
</template>

<script>
    export default {
        name: 'Home',
        props: {
        },
        data: () => ({
            Pcolor: '#BA68C8',
            Scolor: '#EA80FC',
        }),
    }
</script>

<style lang="scss">
    .mainPhoto {
        height: 775px;
    }
    .cardRight {
        height: 350px;
        width: 90%;
    }
    .colCard {
        display: inline-block;
        left: 50%;
        position: absolute;
        top: 2%;
        width: 50%;
    }
    .colCard2 {
        display: inline-block;
        left: 50%;
        position: absolute;
        top: 46%;
        width: 50%;
    }
</style>
