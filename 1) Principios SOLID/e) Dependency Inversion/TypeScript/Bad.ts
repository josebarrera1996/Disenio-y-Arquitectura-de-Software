import { readFile as readFileCb } from 'fs';
import { promisify } from 'util';

const readFile = promisify(readFileCb);

type ReportData = {
    // ..
}

class XmlFormatter {
    parse<T>(content: string): T {
        // Converts an XML string to an object T
    }
}

class ReportReader {

    // BAD: We have created a dependency on a specific request implementation.
    // We should just have ReportReader depend on a parse method: `parse`
    private readonly formatter = new XmlFormatter();

    async read(path: string): Promise<ReportData> {
        const text = await readFile(path, 'UTF8');
        return this.formatter.parse<ReportData>(text);
    }
}

// ...
const reader = new ReportReader();
const report = await reader.read('report.xml');