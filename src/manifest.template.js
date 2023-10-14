const sites = [
    "https://*.google.com/*",
    "https://*.google.ad/*",
    "https://*.google.ae/*",
    "https://*.google.com.af/*",
    "https://*.google.com.ag/*",
    "https://*.google.com.ai/*",
    "https://*.google.am/*",
    "https://*.google.co.ao/*",
    "https://*.google.com.ar/*",
    "https://*.google.as/*",
    "https://*.google.at/*",
    "https://*.google.com.au/*",
    "https://*.google.az/*",
    "https://*.google.ba/*",
    "https://*.google.com.bd/*",
    "https://*.google.be/*",
    "https://*.google.bf/*",
    "https://*.google.bg/*",
    "https://*.google.com.bh/*",
    "https://*.google.bi/*",
    "https://*.google.bj/*",
    "https://*.google.com.bn/*",
    "https://*.google.com.bo/*",
    "https://*.google.com.br/*",
    "https://*.google.bs/*",
    "https://*.google.co.bw/*",
    "https://*.google.by/*",
    "https://*.google.com.bz/*",
    "https://*.google.ca/*",
    "https://*.google.cd/*",
    "https://*.google.cf/*",
    "https://*.google.cg/*",
    "https://*.google.ch/*",
    "https://*.google.ci/*",
    "https://*.google.co.ck/*",
    "https://*.google.cl/*",
    "https://*.google.cm/*",
    "https://*.google.cn/*",
    "https://*.google.com.co/*",
    "https://*.google.co.cr/*",
    "https://*.google.com.cu/*",
    "https://*.google.cv/*",
    "https://*.google.com.cy/*",
    "https://*.google.cz/*",
    "https://*.google.de/*",
    "https://*.google.dj/*",
    "https://*.google.dk/*",
    "https://*.google.dm/*",
    "https://*.google.com.do/*",
    "https://*.google.dz/*",
    "https://*.google.com.ec/*",
    "https://*.google.ee/*",
    "https://*.google.com.eg/*",
    "https://*.google.es/*",
    "https://*.google.com.et/*",
    "https://*.google.fi/*",
    "https://*.google.com.fj/*",
    "https://*.google.fm/*",
    "https://*.google.fr/*",
    "https://*.google.ga/*",
    "https://*.google.ge/*",
    "https://*.google.gg/*",
    "https://*.google.com.gh/*",
    "https://*.google.com.gi/*",
    "https://*.google.gl/*",
    "https://*.google.gm/*",
    "https://*.google.gp/*",
    "https://*.google.gr/*",
    "https://*.google.com.gt/*",
    "https://*.google.gy/*",
    "https://*.google.com.hk/*",
    "https://*.google.hn/*",
    "https://*.google.hr/*",
    "https://*.google.ht/*",
    "https://*.google.hu/*",
    "https://*.google.co.id/*",
    "https://*.google.ie/*",
    "https://*.google.co.il/*",
    "https://*.google.im/*",
    "https://*.google.co.in/*",
    "https://*.google.iq/*",
    "https://*.google.is/*",
    "https://*.google.it/*",
    "https://*.google.je/*",
    "https://*.google.com.jm/*",
    "https://*.google.jo/*",
    "https://*.google.co.jp/*",
    "https://*.google.co.ke/*",
    "https://*.google.com.kh/*",
    "https://*.google.ki/*",
    "https://*.google.kg/*",
    "https://*.google.co.kr/*",
    "https://*.google.com.kw/*",
    "https://*.google.kz/*",
    "https://*.google.la/*",
    "https://*.google.com.lb/*",
    "https://*.google.li/*",
    "https://*.google.lk/*",
    "https://*.google.co.ls/*",
    "https://*.google.lt/*",
    "https://*.google.lu/*",
    "https://*.google.lv/*",
    "https://*.google.com.ly/*",
    "https://*.google.co.ma/*",
    "https://*.google.md/*",
    "https://*.google.me/*",
    "https://*.google.mg/*",
    "https://*.google.mk/*",
    "https://*.google.ml/*",
    "https://*.google.mn/*",
    "https://*.google.ms/*",
    "https://*.google.com.mt/*",
    "https://*.google.mu/*",
    "https://*.google.mv/*",
    "https://*.google.mw/*",
    "https://*.google.com.mx/*",
    "https://*.google.com.my/*",
    "https://*.google.co.mz/*",
    "https://*.google.com.na/*",
    "https://*.google.com.nf/*",
    "https://*.google.com.ng/*",
    "https://*.google.com.ni/*",
    "https://*.google.ne/*",
    "https://*.google.nl/*",
    "https://*.google.no/*",
    "https://*.google.com.np/*",
    "https://*.google.nr/*",
    "https://*.google.nu/*",
    "https://*.google.co.nz/*",
    "https://*.google.com.om/*",
    "https://*.google.com.pa/*",
    "https://*.google.com.pe/*",
    "https://*.google.com.ph/*",
    "https://*.google.com.pk/*",
    "https://*.google.pl/*",
    "https://*.google.pn/*",
    "https://*.google.com.pr/*",
    "https://*.google.ps/*",
    "https://*.google.pt/*",
    "https://*.google.com.py/*",
    "https://*.google.com.qa/*",
    "https://*.google.ro/*",
    "https://*.google.ru/*",
    "https://*.google.rw/*",
    "https://*.google.com.sa/*",
    "https://*.google.com.sb/*",
    "https://*.google.sc/*",
    "https://*.google.se/*",
    "https://*.google.com.sg/*",
    "https://*.google.sh/*",
    "https://*.google.si/*",
    "https://*.google.sk/*",
    "https://*.google.com.sl/*",
    "https://*.google.sn/*",
    "https://*.google.so/*",
    "https://*.google.sm/*",
    "https://*.google.st/*",
    "https://*.google.com.sv/*",
    "https://*.google.td/*",
    "https://*.google.tg/*",
    "https://*.google.co.th/*",
    "https://*.google.com.tj/*",
    "https://*.google.tk/*",
    "https://*.google.tl/*",
    "https://*.google.tm/*",
    "https://*.google.tn/*",
    "https://*.google.to/*",
    "https://*.google.com.tr/*",
    "https://*.google.tt/*",
    "https://*.google.com.tw/*",
    "https://*.google.co.tz/*",
    "https://*.google.com.ua/*",
    "https://*.google.co.ug/*",
    "https://*.google.co.uk/*",
    "https://*.google.com.uy/*",
    "https://*.google.co.uz/*",
    "https://*.google.com.vc/*",
    "https://*.google.co.ve/*",
    "https://*.google.vg/*",
    "https://*.google.co.vi/*",
    "https://*.google.com.vn/*",
    "https://*.google.vu/*",
    "https://*.google.ws/*",
    "https://*.google.rs/*",
    "https://*.google.co.za/*",
    "https://*.google.co.zm/*",
    "https://*.google.co.zw/*",
    "https://*.google.cat/*",
    "https://*.google.xxx/*",
]

module.exports = {
    name: "Hit TAB and ENTER on Google Search Results",
    manifest_version: 3,
    // "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'",
    content_security_policy: {
        "script-src": "self unsafe-eval",
        "object-src": "self",
    },
    content_scripts: [
        {
            matches: [...sites],
            js: ["./contentscript.bundle.js"],
            run_at: "document_end",
            all_frames: false,
        },
    ],
    host_permissions: [...sites],
}
