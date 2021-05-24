// console.log(firebase)

const auth = firebase.auth()

const whenSignedIn = document.getElementById('whenSignedIn')
const whenSignedOut = document.getElementById('whenSignedOut')
const userDetails = document.getElementById('userDetails')

const signInBtn = document.getElementById('signInBtn')
const signOutBtn = document.getElementById('signOutBtn')

const provider = new firebase.auth.GoogleAuthProvider()

signInBtn.onclick = () => auth.signInWithPopup(provider)
signOutBtn.onclick = () => auth.signOut()

auth.onAuthStateChanged((user) => {
	if (user) {
		// signed in
		whenSignedIn.hidden = false // showing it.
		whenSignedOut.hidden = true // hiding it.
		userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>${user.uid}</p>` // showing it.
	} else {
		// not signed in
		whenSignedIn.hidden = true // hiding it.
		whenSignedOut.hidden = false // showing it.
		userDetails.innerHTML = '' // hiding it.
	}
})
