import { parse } from 'csv-parse/browser/esm';

const processCsv = async (file: File): Promise<any[]> => {
    const records: any[] = [];

    const parser = parse({ columns: true });

    parser.on('readable', function () {
        let record;
        while ((record = parser.read()) !== null) {
            records.push(record);
        }
    });

    parser.on('error', function (err) {
        console.error(err.message);
    });

    parser.write(await file.text());

    return records;
};

export default processCsv;