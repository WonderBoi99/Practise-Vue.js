<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <friend-contact/>
            <friend-contact/>
            <friend-contact/>
        </ul>
    </section>
    
</template>

<script>

export default ({
   data(){
    return{
        friends:[
            {
                id: 1,
                name:'bobby',
                phone:345-345-3453,
                email: 'bobby@email.com'
            },
            {
                id: 2,
                name:'sammy',
                phone:375-665-4553,
                email: 'sammy@email.com'
            },
        ]
    };
   }
   
})
</script>
