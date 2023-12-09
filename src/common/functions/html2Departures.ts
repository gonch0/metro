const produceTable = (table) => {
    // const table = document.querySelector('table');
    const trs = Array.from(table.querySelectorAll('tr'));
    trs.shift();

    const res = trs.reduce((acc, item) => {
        const tds = Array.from(item.children);

        const [h, m] = tds;

        const hs = h.textContent.replace(/[^0-9]/g, '');
        const ms = m.textContent.replace(/[^0-9;]/g, '');

        ms.split(';').forEach((minute) => {
            const hour = hs.length === 1 ? `0${hs}` : hs;

            acc.push(`${hour}:${minute}`);
        });

        return acc;
    }, []);

    console.log(res);

    return res;
};

const tables = document.querySelectorAll('table.uss_table_black10');
tables.forEach((item) => produceTable(item));
