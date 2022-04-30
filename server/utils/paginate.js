export default ({ count, limit, page, search }) => {
    const totalPage = Math.ceil(count / limit);

    const pagination = [];
    for (let i = 0; i < totalPage; i++) {
        if (i < 2 || (page > i - 2 && page < i + 4) || i >= totalPage - 2) {
            pagination.push({
                url: `?page=${i + 1}${search && `&search=${search}`}`,
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
            url:
                page == 1
                    ? null
                    : `?page=${parseInt(page) - 1}${
                          search && `&search=${search}`
                      }`,
            label: "previous",
            active: false,
        },
        ...pagination,
        {
            url:
                page == totalPage
                    ? null
                    : `?page=${parseInt(page) + 1}${
                          search && `&search=${search}`
                      }`,
            label: "next",
            active: false,
        },
    ];
};
