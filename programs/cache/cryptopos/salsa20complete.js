function hasse(){
    hasseedge("low","high");
}


// ("0",  FunType [] [(BaseType Label.L),(BaseType Label.H),(BaseType Label.L)] (BaseType Label.L)),
function salsa20() {
    type(x00, "low");
    type(highvar, "high");
    type(x02, "low");
    type(mem, "high");
    x00 = 0;
    highvar = 0;
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
    highvar = 0;

    while (x00 < 10) {
        highvar = (mem[64] + mem[112]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[80];
        mem[80] = highvar;

        highvar = (mem[80] + mem[64]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[96];
        mem[96] = highvar;

        highvar = (mem[96] + mem[80]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[112];
        mem[112] = highvar;

        highvar = (mem[112] + mem[96]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[64];
        mem[64] = highvar;

        highvar = (mem[84] + mem[68]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[100];
        mem[100] = highvar;

        highvar = (mem[100] + mem[84]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[116];
        mem[116] = highvar;

        highvar = (mem[116] + mem[100]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[68];
        mem[68] = highvar;

        highvar = (mem[68] + mem[116]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[84];
        mem[84] = highvar;

        highvar = (mem[104] + mem[88]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[120];
        mem[120] = highvar;

        highvar = (mem[120] + mem[104]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[72];
        mem[72] = highvar;

        highvar = (mem[72] + mem[120]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[88];
        mem[88] = highvar;

        highvar = (mem[88] + mem[72]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[104];
        mem[104] = highvar;

        highvar = (mem[124] + mem[108]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[76];
        mem[76] = highvar;

        highvar = (mem[76] + mem[124]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[92];
        mem[92] = highvar;

        highvar = (mem[92] + mem[76]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[108];
        mem[108] = highvar;

        highvar = (mem[108] + mem[92]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[124];
        mem[124] = highvar;

        highvar = (mem[64] + mem[76]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[68];
        mem[68] = highvar;

        highvar = (mem[68] + mem[64]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[72];
        mem[72] = highvar;

        highvar = (mem[72] + mem[68]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[76];
        mem[76] = highvar;

        highvar = (mem[76] + mem[72]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[64];
        mem[64] = highvar;

        highvar = (mem[84] + mem[80]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[88];
        mem[88] = highvar;

        highvar = (mem[88] + mem[84]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[92];
        mem[92] = highvar;

        highvar = (mem[92] + mem[88]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[80];
        mem[80] = highvar;

        highvar = (mem[80] + mem[92]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[84];
        mem[84] = highvar;

        highvar = (mem[104] + mem[100]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[108];
        mem[108] = highvar;

        highvar = (mem[108] + mem[104]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[96];
        mem[96] = highvar;

        highvar = (mem[96] + mem[108]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[100];
        mem[100] = highvar;

        highvar = (mem[100] + mem[96]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[104];
        mem[104] = highvar;

        x00 = x00 + 1;
    }
    x00 = 64;

    while (x00 < 128) {
        x02 = x00 - 64;
        mem[x00] = mem[x00] + mem[x02];
        x00 = x00 + 4;
    }
    return 0
}


// ("1",  FunType [(BaseType Label.T),(BaseType Label.T),(BaseType Label.T),(BaseType Label.T),(BaseType Label.T),(BaseType Label.T),(BaseType Label.T),(BaseType Label.T)] [] (BaseType Label.L)),
function salsa20_ksetup(_10, _11, _12, _13, _14, _15, _16, _17) {
    type(_10, "low")
    type(_11, "low")
    type(_12, "low")
    type(_13, "low")
    type(_14, "low")
    type(_15, "low")
    type(_16, "low")
    type(_17, "low")
    type(mem, "high")
    mem[0] = 1634760805;
    mem[4] = _10;
    mem[8] = _11;
    mem[12] = _12;
    mem[16] = _13;
    mem[20] = 857760878;
    mem[40] = 2036477234;
    mem[44] = _14;
    mem[48] = _15;
    mem[52] = _16;
    mem[56] = _17;
    mem[60] = 1797285236;
    return 0;
}

// ("2",  FunType [(BaseType Label.T),(BaseType Label.T)] [] (BaseType Label.L)),
function salsa20_noncesetup(_20, _21) {
    type(_20, "low")
    type(_21, "low")
    type(mem, "high")
    mem[24] = _20;
    mem[28] = _21;
    mem[32] = 0;
    return 0;
}

// ("3",  FunType [(BaseType Label.T)] [BaseType Label.L,BaseType Label.L, BaseType Label.H, BaseType Label.H, BaseType Label.L, BaseType Label.L] (BaseType Label.L)),
function salsa20_encrypt(Aux1) {
    type(Aux1, "low")
    type(_30, "low")
    type(_31, "low")
    type(sec33, "high")
    type(sec34, "high")
    type(_35, "low")
    type(_36, "low")
    type(res, "low")
    type(mem, "high")
    type(x00, "low");
    type(highvar, "high");
    type(x02, "low");
    _30 = 0;
    _31 = 0;
    sec33 = 0;
    sec34 = 0;
    _35 = 0;
    _36 = 0;
    
    _30 = Aux1;
    if (_30 != 0) {
        _35 = 128;
        _36 = 128 + _30;

    }
    
    x00 = 0;
    highvar = 0;
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
    highvar = 0;

    while (x00 < 10) {
        highvar = (mem[64] + mem[112]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[80];
        mem[80] = highvar;

        highvar = (mem[80] + mem[64]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[96];
        mem[96] = highvar;

        highvar = (mem[96] + mem[80]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[112];
        mem[112] = highvar;

        highvar = (mem[112] + mem[96]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[64];
        mem[64] = highvar;

        highvar = (mem[84] + mem[68]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[100];
        mem[100] = highvar;

        highvar = (mem[100] + mem[84]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[116];
        mem[116] = highvar;

        highvar = (mem[116] + mem[100]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[68];
        mem[68] = highvar;

        highvar = (mem[68] + mem[116]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[84];
        mem[84] = highvar;

        highvar = (mem[104] + mem[88]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[120];
        mem[120] = highvar;

        highvar = (mem[120] + mem[104]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[72];
        mem[72] = highvar;

        highvar = (mem[72] + mem[120]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[88];
        mem[88] = highvar;

        highvar = (mem[88] + mem[72]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[104];
        mem[104] = highvar;

        highvar = (mem[124] + mem[108]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[76];
        mem[76] = highvar;

        highvar = (mem[76] + mem[124]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[92];
        mem[92] = highvar;

        highvar = (mem[92] + mem[76]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[108];
        mem[108] = highvar;

        highvar = (mem[108] + mem[92]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[124];
        mem[124] = highvar;

        highvar = (mem[64] + mem[76]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[68];
        mem[68] = highvar;

        highvar = (mem[68] + mem[64]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[72];
        mem[72] = highvar;

        highvar = (mem[72] + mem[68]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[76];
        mem[76] = highvar;

        highvar = (mem[76] + mem[72]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[64];
        mem[64] = highvar;

        highvar = (mem[84] + mem[80]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[88];
        mem[88] = highvar;

        highvar = (mem[88] + mem[84]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[92];
        mem[92] = highvar;

        highvar = (mem[92] + mem[88]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[80];
        mem[80] = highvar;

        highvar = (mem[80] + mem[92]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[84];
        mem[84] = highvar;

        highvar = (mem[104] + mem[100]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[108];
        mem[108] = highvar;

        highvar = (mem[108] + mem[104]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[96];
        mem[96] = highvar;

        highvar = (mem[96] + mem[108]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[100];
        mem[100] = highvar;

        highvar = (mem[100] + mem[96]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[104];
        mem[104] = highvar;

        x00 = x00 + 1;
    }
    x00 = 64;

    while (x00 < 128) {
        x02 = x00 - 64;
        mem[x00] = mem[x00] + mem[x02];
        x00 = x00 + 4;
    }
    return 0;
}

// ("4",  FunType [(BaseType Label.T),(BaseType Label.T)] [(BaseType Label.L),(BaseType Label.L)] (BaseType Label.L)),
function salsa20_encrypt_many(Aux1, _41) {
    type(Aux1, "low");
    type(_41, "low");
    type(_42, "low");
    type(_40, "low");
    type(res, "low");
    type(mem, "high");
    type(Aux1, "low")
    type(_30, "low")
    type(_31, "low")
    type(sec33, "high")
    type(sec34, "high")
    type(_35, "low")
    type(_36, "low")
    type(res, "low")
    type(mem, "high")
    type(x00, "low");
    type(highvar, "high");
    type(x02, "low");
    _40 = Aux1;
    _42 = 0;

    while (!(_42 >= _40)) {

        mem[32] = 0;
        _42 = _42 + 1;
    }
    // res = salsa20_encrypt(_41);
    Aux1 = _41

    _30 = 0;
    _31 = 0;
    sec33 = 0;
    sec34 = 0;
    _35 = 0;
    _36 = 0;
    
    _30 = Aux1;
    if (_30 != 0) {
        _35 = 128;
        _36 = 128 + _30;

    }
    
    x00 = 0;
    highvar = 0;
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
    highvar = 0;

    while (x00 < 10) {
        highvar = (mem[64] + mem[112]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[80];
        mem[80] = highvar;

        highvar = (mem[80] + mem[64]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[96];
        mem[96] = highvar;

        highvar = (mem[96] + mem[80]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[112];
        mem[112] = highvar;

        highvar = (mem[112] + mem[96]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[64];
        mem[64] = highvar;

        highvar = (mem[84] + mem[68]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[100];
        mem[100] = highvar;

        highvar = (mem[100] + mem[84]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[116];
        mem[116] = highvar;

        highvar = (mem[116] + mem[100]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[68];
        mem[68] = highvar;

        highvar = (mem[68] + mem[116]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[84];
        mem[84] = highvar;

        highvar = (mem[104] + mem[88]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[120];
        mem[120] = highvar;

        highvar = (mem[120] + mem[104]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[72];
        mem[72] = highvar;

        highvar = (mem[72] + mem[120]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[88];
        mem[88] = highvar;

        highvar = (mem[88] + mem[72]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[104];
        mem[104] = highvar;

        highvar = (mem[124] + mem[108]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[76];
        mem[76] = highvar;

        highvar = (mem[76] + mem[124]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[92];
        mem[92] = highvar;

        highvar = (mem[92] + mem[76]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[108];
        mem[108] = highvar;

        highvar = (mem[108] + mem[92]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[124];
        mem[124] = highvar;

        highvar = (mem[64] + mem[76]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[68];
        mem[68] = highvar;

        highvar = (mem[68] + mem[64]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[72];
        mem[72] = highvar;

        highvar = (mem[72] + mem[68]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[76];
        mem[76] = highvar;

        highvar = (mem[76] + mem[72]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[64];
        mem[64] = highvar;

        highvar = (mem[84] + mem[80]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[88];
        mem[88] = highvar;

        highvar = (mem[88] + mem[84]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[92];
        mem[92] = highvar;

        highvar = (mem[92] + mem[88]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[80];
        mem[80] = highvar;

        highvar = (mem[80] + mem[92]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[84];
        mem[84] = highvar;

        highvar = (mem[104] + mem[100]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[108];
        mem[108] = highvar;

        highvar = (mem[108] + mem[104]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[96];
        mem[96] = highvar;

        highvar = (mem[96] + mem[108]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[100];
        mem[100] = highvar;

        highvar = (mem[100] + mem[96]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[104];
        mem[104] = highvar;

        x00 = x00 + 1;
    }
    x00 = 64;

    while (x00 < 128) {
        x02 = x00 - 64;
        mem[x00] = mem[x00] + mem[x02];
        x00 = x00 + 4;
    }
    return 0;
}
// ("5",  FunType [(BaseType Label.T)] [(BaseType Label.L),(BaseType Label.L)] (BaseType Label.L)),
function salsa20_sm(Aux1) {
    type(Aux1, "low")
    type(_51, "low")
    type(_50, "low")
    type(res, "low")
    type(x00, "low");
    type(highvar, "high");
    type(x02, "low");
    type(mem, "high");
    _50 = Aux1;
    _51 = 0;
    while (!(_51 >= _50)) {
        _51 = _51 + 1;
    }

    x00 = 0;
    highvar = 0;
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
    highvar = 0;

    while (x00 < 10) {
        highvar = (mem[64] + mem[112]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[80];
        mem[80] = highvar;

        highvar = (mem[80] + mem[64]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[96];
        mem[96] = highvar;

        highvar = (mem[96] + mem[80]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[112];
        mem[112] = highvar;

        highvar = (mem[112] + mem[96]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[64];
        mem[64] = highvar;

        highvar = (mem[84] + mem[68]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[100];
        mem[100] = highvar;

        highvar = (mem[100] + mem[84]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[116];
        mem[116] = highvar;

        highvar = (mem[116] + mem[100]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[68];
        mem[68] = highvar;

        highvar = (mem[68] + mem[116]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[84];
        mem[84] = highvar;

        highvar = (mem[104] + mem[88]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[120];
        mem[120] = highvar;

        highvar = (mem[120] + mem[104]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[72];
        mem[72] = highvar;

        highvar = (mem[72] + mem[120]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[88];
        mem[88] = highvar;

        highvar = (mem[88] + mem[72]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[104];
        mem[104] = highvar;

        highvar = (mem[124] + mem[108]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[76];
        mem[76] = highvar;

        highvar = (mem[76] + mem[124]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[92];
        mem[92] = highvar;

        highvar = (mem[92] + mem[76]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[108];
        mem[108] = highvar;

        highvar = (mem[108] + mem[92]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[124];
        mem[124] = highvar;

        highvar = (mem[64] + mem[76]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[68];
        mem[68] = highvar;

        highvar = (mem[68] + mem[64]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[72];
        mem[72] = highvar;

        highvar = (mem[72] + mem[68]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[76];
        mem[76] = highvar;

        highvar = (mem[76] + mem[72]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[64];
        mem[64] = highvar;

        highvar = (mem[84] + mem[80]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[88];
        mem[88] = highvar;

        highvar = (mem[88] + mem[84]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[92];
        mem[92] = highvar;

        highvar = (mem[92] + mem[88]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[80];
        mem[80] = highvar;

        highvar = (mem[80] + mem[92]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[84];
        mem[84] = highvar;

        highvar = (mem[104] + mem[100]) >>> 0;
        highvar = (highvar << 7 | highvar >>> (32 - 7)) >>> 0;
        highvar = highvar ^ mem[108];
        mem[108] = highvar;

        highvar = (mem[108] + mem[104]) >>> 0;
        highvar = (highvar << 9 | highvar >>> (32 - 9)) >>> 0;
        highvar = highvar ^ mem[96];
        mem[96] = highvar;

        highvar = (mem[96] + mem[108]) >>> 0;
        highvar = (highvar << 13 | highvar >>> (32 - 13)) >>> 0;
        highvar = highvar ^ mem[100];
        mem[100] = highvar;

        highvar = (mem[100] + mem[96]) >>> 0;
        highvar = (highvar << 18 | highvar >>> (32 - 18)) >>> 0;
        highvar = highvar ^ mem[104];
        mem[104] = highvar;

        x00 = x00 + 1;
    }
    x00 = 64;

    while (x00 < 128) {
        x02 = x00 - 64;
        mem[x00] = mem[x00] + mem[x02];
        x00 = x00 + 4;
    }
    return 0;
}