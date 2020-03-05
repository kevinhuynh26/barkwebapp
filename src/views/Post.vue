<template>
<div class="columns is-multiline">
    <div class="column is-one-third" v-for="(post, index) in sortedArray" v-bind:item="post" v-bind:index="index" v-bind:key="post.id">
        <div class="card">
            <div class="card-header">
            <div class="card-header-title nameBG">
                
            </div>
            </div>
            
            <div class="card-content">
                <time class="time">
                    <h6>
                    {{momentify(post.date)}} 
                    <br/>
                    {{postAge(post.date)}} day(s) ago
                    </h6>
                </time>
                <br/>
                    <div class="emailText">
                        {{post.name}}
                    </div>
                    <div class="usernameText">
                        @{{post.username}}
                    </div>
                    <br/>
                    <div class="bodyText">
                        {{post.body}}
                    </div>
                    
                </div>
            <div class="card-footer">
                <div class="card-footer-item likeBG">
                    <a href="#"> Like </a>
                </div>
                <div class="card-footer-item replyBG">
                    <a href="#"> Reply </a>
                </div>
                <div class="card-footer-item remove-button">
                    <a href="#"> Remove </a>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import DataService from "../DataService";
import moment from "moment";

const dataService = new DataService();

export default {
    name: "Post",
    data() {
        return {
            posts: []
        };
    },
    created() {
        dataService.getAllPosts()
        .then(res => {
            this.posts = res.data;
            console.log(this.posts);
        })
        .catch(err => console.log(err))
    },
    methods: {
        postAge(date) {
            return moment().diff(date, 'days');
        },
        momentify(date) {
            return moment(date).format("MMMM Do, YYYY")
        }
    },
    computed: {
        sortedArray: function() {
            function compare(a, b) {
                if (a.date < b.date)
                    return -1;
                if (a.date > b.date)
                    return 1;
                return 0;
            }

            return this.posts.slice(0).sort(compare).reverse();
        }
    }
   
    
}
</script>

<style scoped> 
    .emailText {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .likeBG {
        background-color: #004d99;
    }

    .likeBG a, .remove-button a {
        color: #FFFFFF;
    }

    .replyBG, .nameBG {
        background-color: #F5F5F5;
    }

    
    .remove-button {
        background-color: #7f2d2d;
    }

    .card {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .card-footer{
        margin-top: auto;
    }

    .time {
        color: grey;
        text-align: end;
    }

    .bodyText {
        font-size: 1rem;
    }
</style>
