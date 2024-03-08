import { database } from '$cms'; // eslint-disable-line
import * as P from '$cms/fields';

/* --- */

export default database({
	menu: P.Object({
		titolo: P.String(),
		tag: P.Array(P.String())
	})
});
