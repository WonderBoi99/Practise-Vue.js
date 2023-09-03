<template>
    <ul>

    </ul>
</template>

<script>


export default {
   data(){
    return{
        storedResources: [
            {
                id: 'official-guide',
                title: 'offical guide',
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
   }
}
</script>
