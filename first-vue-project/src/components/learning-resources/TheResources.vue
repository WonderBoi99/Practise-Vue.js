<template>
    <base-card>
        <base-button @click="switchSelection('stored-resource')" :mode="storeButtonMode">Stored Resources</base-button>
        <base-button @click="switchSelection('add-resource')" :mode="addButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selection"></component>
    </keep-alive>
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResource from './StoredResource.vue';

export default {
    components:{
        AddResource,
        StoredResource
    },
    data(){
        return{
            selection: 'stored-resource',
            storedResources: [
            {
                id: 'official-guide',
                title: 'Offical guide',
                description: 'the offical vue.js docs',
                link: 'https://vuejs.org'
            },
            {
                id: 'google',
                title: 'Google',
                description: 'Learn to google',
                link: 'https://google.org'
            },
        ]
        };
    },
    provide(){
        return{
            resources: this.storedResources,
            addResource: this.addResource
        };
    },
    computed: {
        storeButtonMode(){
            return this.selection === 'stored-resource' ? null : 'flat';
        },
        addButtonMode(){
            return this.selection === 'add-resource' ? null : 'flat';
        }
    },
    methods: {
        switchSelection(choice){
            this.selection = choice;
        },
        addResource(title, description, link){
            const newResource = {
                id: new Date().toDateString,
                title: title,
                description: description,
                link: link 
            }
            this.storedResources.push(newResource);
            this.selection = 'stored-resource';
        }
    }
}
</script>