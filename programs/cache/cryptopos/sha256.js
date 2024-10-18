function hasse(){
    hasseedge("low","high");
}

// ("0",  FunType [] [(BaseType Label.L)] (BaseType Label.L)),
function sha256_init() {
    type(mem, "high")
    type(_00, "low")

    mem[0] = 0;
    mem[4] = 0;
    _00 = 0;

    while (!(_00 >= 64)) {
        mem[44 + (_00 * 4)] = 0;
        _00 = _00 + 1;
    }

    _00 = 0;

    while (!(_00 >= 64)) {

        mem[300 + _00] = 0;
        _00 = _00 + 1;
    }

    _00 = 0;

    while (!(_00 >= 32)) {
        mem[620 + _00] = 0;
        _00 = _00 + 1;
    }

    mem[12] = 1779033703;
    mem[16] = 3144134277;
    mem[20] = 1013904242;
    mem[24] = 2773480762;
    mem[28] = 1359893119;
    mem[32] = 2600822924;
    mem[36] = 528734635;
    mem[40] = 1541459225;

    return 0;
}

// ("1",  FunType [] [(BaseType Label.H),(BaseType Label.H),(BaseType Label.H),(BaseType Label.H),(BaseType Label.H),(BaseType Label.H),(BaseType Label.H),(BaseType Label.H),(BaseType Label.L),(BaseType Label.L),(BaseType Label.H),(BaseType Label.H),(BaseType Label.L)] (BaseType Label.L)),
function sha256_transform() {
    type(_10, "high");
    type(_11, "high");
    type(_12, "high");
    type(_13, "high");
    type(_14, "high");
    type(_15, "high");
    type(_16, "high");
    type(_17, "high");
    type(_18, "low");
    type(_19, "low");
    type(_110, "high");
    type(_111, "high");
    type(_112, "low");
    type(mem,"high");
    _112 = 44;
    _18 = 0;
    _19 = 0;

    while (!(_18 >= 16)) {
        mem[_112 + (_18 * 4)] = ((mem[300 + _19] << 24) | (mem[300 + (_19 + 1)] << 16) | (mem[300 + (_19 + 2)] << 8) | mem[300 + (_19 + 3)]);
        _18 = _18 + 1;
        _19 = _19 + 4;
    }

    while (!(_18 >= 64)) {
        mem[_112 + (_18 * 4)] = mem[_112 + ((_18 - 7) * 4)] + mem[_112 + ((_18 - 16) * 4)] +
            ((mem[_112 + ((_18 - 2) * 4)] >>> 17) ^ (mem[_112 + ((_18 - 2) * 4)] >>> 19) ^ (mem[_112 + ((_18 - 2) * 4)] >>> 10)) +
            ((mem[_112 + ((_18 - 15) * 4)] >>> 7) ^ (mem[_112 + ((_18 - 15) * 4)] >>> 18) ^ (mem[_112 + ((_18 - 15) * 4)] >>> 3));
        _18 = _18 + 1;
    }

    _10 = mem[12];
    _11 = mem[16];
    _12 = mem[20];
    _13 = mem[24];
    _14 = mem[28];
    _15 = mem[32];
    _16 = mem[36];
    _17 = mem[40];
    _18 = 0;

    while (_18 < 64) {
        _110 = _17 + mem[364 + (_18 * 4)] + mem[_112 + (_18 * 4)] +
            (((_14 >>> 6) ^ (_14 >>> 11) ^ (_14 >>> 25)) + ((_14 & _15) ^ (_14 & _16)));
        _111 = (((_10 >>> 2) ^ (_10 >>> 13) ^ (_10 >>> 22)) + ((_10 & _11) ^ (_10 & _12) ^ (_11 & _12)));
        _17 = _16;
        _16 = _15;
        _15 = _14;
        _14 = _13 + _110;
        _13 = _12;
        _12 = _11;
        _11 = _10;
        _10 = _110 + _111;
        _18 = _18 + 1;
    }

    mem[12] = mem[12] + _10;
    mem[16] = mem[16] + _11;
    mem[20] = mem[20] + _12;
    mem[24] = mem[24] + _13;
    mem[28] = mem[28] + _14;
    mem[32] = mem[32] + _15;
    mem[36] = mem[36] + _16;
    mem[40] = mem[40] + _17;

    return 0;
}