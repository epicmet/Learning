#include <stdio.h>

int main() {
  int upper, lower, step;
  float fahr, celsuis;

  lower = 0;
  upper = 300;
  step = 20;

  fahr = lower;

  while (fahr <= upper) {
    celsuis = (5.0 / 9.0) * (fahr - 32.0);

    printf("%4.0f %6.1f\n", fahr, celsuis);

    fahr = fahr + step;
  }

  return 0;
}
