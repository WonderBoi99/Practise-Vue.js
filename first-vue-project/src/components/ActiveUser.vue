<template>
    <div>
        <h2>{{ firstname }}</h2>
        <h3>{{ userage }}}</h3>  
    </div>
</template>

<script>
export default{
    props:{
        firstname, 
        userage,
    }
}
</script>
