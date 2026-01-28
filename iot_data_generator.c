#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <unistd.h>
int main() {
    srand(time(0));
    printf("IoT Sensor Data Stream (Temperature & Humidity)\n");
    printf("Press Ctrl+C to stop.\n\n");
    while (1) {
        int temperature = 20 + rand() % 16;
        int humidity = 30 + rand() % 41;
        printf("Temperature: %d°C, Humidity: %d%%\n", temperature, humidity);
        sleep(1);
    }
    return 0;
}
