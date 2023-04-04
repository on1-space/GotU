export interface User {
	uid: string
	id: string
	displayName: string
	email: string
	authToken: string
	emailVerified: boolean
	metadata: {
		lastSignInTime: string
		creationTime: string
	}
	phoneNumber?: string
	photoURL: string
}
