function hasse(){
    hasseedge("obs","sec");
}

function tea_stub(){
    // Type declarations
    type(x10, "sec")
    type(x11, "sec")
    type(x12, "sec")
    type(x13, "sec")
    type(x14, "sec")
    type(x15, "sec")
    type(x16, "obs")
    type(x17, "obs")
    type(x18, "obs")
    type(mem, "sec")

    x16 = 2654435769;
    x17 = 3337565984;
    x10 = mem[0];
    x11 = mem[4];
    x12 = mem[8];
    x13 = mem[12];
    x14 = mem[16];
    x15 = mem[20];
    x18 = 0;

    while (x18 < 32) {
        x11 = x11 - ((x10 << 4) + x14) ^ (x10 + x17) ^ ((x10 >> 5) + x15);
        x10 = x10 - ((x11 << 4) + x12) ^ (x11 + x17) ^ ((x11 >> 5) + x13);
        x17 = x17 - x16;
        x18 = x18 + 1;
    }

    mem[0] = x10;
    mem[4] = x11;
}
