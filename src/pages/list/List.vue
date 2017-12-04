<template>
	<div>
 		<list-header/>
 		<list-article/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import ArticleComponent from "./Article";

export default {
	components: {
		"list-header": HeaderComponent,
		"list-article":ArticleComponent
	}
}
</script>

<style>
</style>