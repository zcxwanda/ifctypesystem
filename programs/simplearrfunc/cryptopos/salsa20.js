function hasse(){
    hasseedge("obs","sec");
}

function salsa20() {
    type(x00, "obs");
    type(secvar, "sec");
    type(x02, "obs");
    type(mem, "sec");
    x00 = 0;
    secvar = 0;
    x02 = 0;

    while (x00 < 64) {
        mem[x00] = 8888;
        x00 = x00 + 4;
    }

    x00 = 64;

    while (x00 < 128) {
        x02 = x00 - 64;
        mem[x00] = mem[x02];
        x00 = x00 + 4;
    }

    x00 = 0;
    secvar = 0;

    while (x00 < 10) {
        secvar = (mem[64] + mem[112]) >>> 0;
        secvar = (secvar << 7 | secvar >>> (32 - 7)) >>> 0;
        secvar = secvar ^ mem[80];
        mem[80] = secvar;

        secvar = (mem[80] + mem[64]) >>> 0;
        secvar = (secvar << 9 | secvar >>> (32 - 9)) >>> 0;
        secvar = secvar ^ mem[96];
        mem[96] = secvar;

        secvar = (mem[96] + mem[80]) >>> 0;
        secvar = (secvar << 13 | secvar >>> (32 - 13)) >>> 0;
        secvar = secvar ^ mem[112];
        mem[112] = secvar;

        secvar = (mem[112] + mem[96]) >>> 0;
        secvar = (secvar << 18 | secvar >>> (32 - 18)) >>> 0;
        secvar = secvar ^ mem[64];
        mem[64] = secvar;

        secvar = (mem[84] + mem[68]) >>> 0;
        secvar = (secvar << 7 | secvar >>> (32 - 7)) >>> 0;
        secvar = secvar ^ mem[100];
        mem[100] = secvar;

        secvar = (mem[100] + mem[84]) >>> 0;
        secvar = (secvar << 9 | secvar >>> (32 - 9)) >>> 0;
        secvar = secvar ^ mem[116];
        mem[116] = secvar;

        secvar = (mem[116] + mem[100]) >>> 0;
        secvar = (secvar << 13 | secvar >>> (32 - 13)) >>> 0;
        secvar = secvar ^ mem[68];
        mem[68] = secvar;

        secvar = (mem[68] + mem[116]) >>> 0;
        secvar = (secvar << 18 | secvar >>> (32 - 18)) >>> 0;
        secvar = secvar ^ mem[84];
        mem[84] = secvar;

        secvar = (mem[104] + mem[88]) >>> 0;
        secvar = (secvar << 7 | secvar >>> (32 - 7)) >>> 0;
        secvar = secvar ^ mem[120];
        mem[120] = secvar;

        secvar = (mem[120] + mem[104]) >>> 0;
        secvar = (secvar << 9 | secvar >>> (32 - 9)) >>> 0;
        secvar = secvar ^ mem[72];
        mem[72] = secvar;

        secvar = (mem[72] + mem[120]) >>> 0;
        secvar = (secvar << 13 | secvar >>> (32 - 13)) >>> 0;
        secvar = secvar ^ mem[88];
        mem[88] = secvar;

        secvar = (mem[88] + mem[72]) >>> 0;
        secvar = (secvar << 18 | secvar >>> (32 - 18)) >>> 0;
        secvar = secvar ^ mem[104];
        mem[104] = secvar;

        secvar = (mem[124] + mem[108]) >>> 0;
        secvar = (secvar << 7 | secvar >>> (32 - 7)) >>> 0;
        secvar = secvar ^ mem[76];
        mem[76] = secvar;

        secvar = (mem[76] + mem[124]) >>> 0;
        secvar = (secvar << 9 | secvar >>> (32 - 9)) >>> 0;
        secvar = secvar ^ mem[92];
        mem[92] = secvar;

        secvar = (mem[92] + mem[76]) >>> 0;
        secvar = (secvar << 13 | secvar >>> (32 - 13)) >>> 0;
        secvar = secvar ^ mem[108];
        mem[108] = secvar;

        secvar = (mem[108] + mem[92]) >>> 0;
        secvar = (secvar << 18 | secvar >>> (32 - 18)) >>> 0;
        secvar = secvar ^ mem[124];
        mem[124] = secvar;

        secvar = (mem[64] + mem[76]) >>> 0;
        secvar = (secvar << 7 | secvar >>> (32 - 7)) >>> 0;
        secvar = secvar ^ mem[68];
        mem[68] = secvar;

        secvar = (mem[68] + mem[64]) >>> 0;
        secvar = (secvar << 9 | secvar >>> (32 - 9)) >>> 0;
        secvar = secvar ^ mem[72];
        mem[72] = secvar;

        secvar = (mem[72] + mem[68]) >>> 0;
        secvar = (secvar << 13 | secvar >>> (32 - 13)) >>> 0;
        secvar = secvar ^ mem[76];
        mem[76] = secvar;

        secvar = (mem[76] + mem[72]) >>> 0;
        secvar = (secvar << 18 | secvar >>> (32 - 18)) >>> 0;
        secvar = secvar ^ mem[64];
        mem[64] = secvar;

        secvar = (mem[84] + mem[80]) >>> 0;
        secvar = (secvar << 7 | secvar >>> (32 - 7)) >>> 0;
        secvar = secvar ^ mem[88];
        mem[88] = secvar;

        secvar = (mem[88] + mem[84]) >>> 0;
        secvar = (secvar << 9 | secvar >>> (32 - 9)) >>> 0;
        secvar = secvar ^ mem[92];
        mem[92] = secvar;

        secvar = (mem[92] + mem[88]) >>> 0;
        secvar = (secvar << 13 | secvar >>> (32 - 13)) >>> 0;
        secvar = secvar ^ mem[80];
        mem[80] = secvar;

        secvar = (mem[80] + mem[92]) >>> 0;
        secvar = (secvar << 18 | secvar >>> (32 - 18)) >>> 0;
        secvar = secvar ^ mem[84];
        mem[84] = secvar;

        secvar = (mem[104] + mem[100]) >>> 0;
        secvar = (secvar << 7 | secvar >>> (32 - 7)) >>> 0;
        secvar = secvar ^ mem[108];
        mem[108] = secvar;

        secvar = (mem[108] + mem[104]) >>> 0;
        secvar = (secvar << 9 | secvar >>> (32 - 9)) >>> 0;
        secvar = secvar ^ mem[96];
        mem[96] = secvar;

        secvar = (mem[96] + mem[108]) >>> 0;
        secvar = (secvar << 13 | secvar >>> (32 - 13)) >>> 0;
        secvar = secvar ^ mem[100];
        mem[100] = secvar;

        secvar = (mem[100] + mem[96]) >>> 0;
        secvar = (secvar << 18 | secvar >>> (32 - 18)) >>> 0;
        secvar = secvar ^ mem[104];
        mem[104] = secvar;

        x00 = x00 + 1;
    }
    x00 = 64;

    while (x00 < 128) {
        x02 = x00 - 64;
        mem[x00] = mem[x00] + mem[x02];
        x00 = x00 + 4;
    }
}
