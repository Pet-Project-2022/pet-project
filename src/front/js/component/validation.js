const validation = values => {
	let errors = {};

	if (!values.fullname) {
		errors.fullname = "Name is Required.";
	}
	if (!values.email) {
		errors.email = "Email is Required.";
	} else if (!/\$+@\$+\.\$+/.test(values.email)) {
		errors.email = "Email is Invalid.";
	}
	if (!values.password) {
		errors.password = "Password is Required.";
	} else if (values.password.length < 8) {
		errors.password = "Password must be more than eight characteres.";
	}
	if (!values.zipcode) {
		errors.zicopde = "Zipcode is Required.";
	}
	return errors;
};
export default validation;
