import React from "react";

export const useToggleDrawer = () => {
	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer =
		(anchor: string, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setState({ ...state, [anchor]: open });
		};

	return { toggleDrawer, state };
};
