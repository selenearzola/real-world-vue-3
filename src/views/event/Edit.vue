<template>
	<p>Edit the event here</p>
</template>
<script>
	export default {
		props: ['event'],
		data: function () {
			return {
				unsavedChanges: false
			}
		},
		beforeRouteLeave(routeTo, routeFrom, next) {

			if (this.unsavedChanges) {

				const answer = window.confirm('Do you really want to leave? You have unsaved changes')

				if (answer) {

					next()

				} else {

					next(false)
				}
			} else {

				next()
			}

			// Or using Vue router 4
			// if (!answer) {

			// 	return false;
			// }

		}

	}
</script>