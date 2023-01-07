import { pinyin } from 'pinyin-pro';
import * as dns from "dns";
import { SrvRecord } from "dns";

export function translate(hostname: string): string {
    return pinyin(hostname, {
        type: 'array',
        toneType: 'none',
    }).join('');
}

export function resolveSrv(hostname: string, callback: (error: NodeJS.ErrnoException | null, addresses: SrvRecord[]) => void): void {
    dns.resolveSrv(
        translate(hostname), callback
    );
}

export namespace resolveSrv {
    function __promisify__(hostname: string): Promise<SrvRecord[]> {
        return dns.resolveSrv.__promisify__(
            translate(hostname)
        );
    }
}
