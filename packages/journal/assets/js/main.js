$(function () {
    pagination(false);

    // Navbar active link
    $(".nav a").each(function () {
        if (window.location.pathname === "/") {
            $(".nav a").eq(0).addClass("active-route");
        } else if (
            $(this).attr("href").split("/")[3] !== "" &&
            window.location.pathname.includes(
                $(this).attr("href").split("/")[3]
            )
        ) {
            $(this).addClass("active-route");
        }
    });

    // Categories active link
    $(".categories-nav a").each(function () {
        const isCategoriesRoute = window.location.pathname.split("/")[1] === "tag";

        if (isCategoriesRoute) {
            const currentIsActive =
                $(this).attr("slug") === window.location.pathname.split("/")[2];

            if (currentIsActive) {
                $(this).addClass("active-route");
            }
        }
    });
});
