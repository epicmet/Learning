use std::str::FromStr;

fn get_input() -> &'static str {
    return "0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2"
}

struct Point {
    x: i32,
    y: i32,
}

struct Line {
    p1: Point,
    p2: Point,
}

impl FromStr for Point {
    type Err;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        todo!()
    }

}


fn main() {
}
