#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int n, s, h;
    do
    {
    n = get_int("Enter an int: ");
    }
    while( n < 0 || n > 23 );
    //int row loop
    for (int i = 0; i < n; i++)
    {
        for (s = n - 1; s > i; s--)
        {
            printf(" ");
        }
        for (h = 0; h <= i + 1; h++)
        {
            printf("#");
        }
        printf("\n");
    }
}