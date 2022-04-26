export default ({ count, limit, page }) => {
    const totalPage = Math.ceil(count / limit);

    const pagination = [];
    for (let i = 0; i < totalPage; i++) {
        if (i < 2 || (page > i - 2 && page < i + 4) || i >= totalPage - 2) {
            pagination.push({
                url: `?page=${i + 1}`,
                label: `${i + 1}`,
                active: i + 1 == page ? true : false,
            });
        } else if (i === 2 || i === totalPage - 3) {
            pagination.push({
                url: null,
                label: `...`,
                active: false,
            });
        }
    }
    return [
        {
            url: page == 1 ? null : `?page=${parseInt(page) - 1}`,
            label: "previous",
            active: false,
        },
        ...pagination,
        {
            url: page == totalPage ? null : `?page=${parseInt(page) + 1}`,
            label: "next",
            active: false,
        },
    ];
};
