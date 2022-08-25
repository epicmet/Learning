#include <stdio.h>

#define LOWER 0   /* lower limit of table */
#define UPPER 300 /* upper limit */
#define STEP 20   /* step size */

int main() {
  float fahr;

  for (fahr = LOWER; fahr <= UPPER; fahr += STEP) {
    printf("%4.0f %6.1f\n", fahr, (5.0 / 9.0) * (fahr - 32.0));
  }

  return 0;
}
