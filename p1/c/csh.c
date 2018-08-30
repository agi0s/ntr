#include <stdio.h>
#include <cs50.h>
#include <math.h>

int main(void)
{
    int coinsNum = 0;
    float money;

    do
    {
        money = get_float("sum is owed:");
    }
    while ( money < 0 );

    int amount = round( money * 100 );

    float coins [] = {25, 10, 5, 1};

    for( int i = 0; amount > 0; i++ )
    {
        while( amount >= coins[i] )
        {
                amount = amount - coins[i];
                coinsNum++;
        }
    }


    printf("%i\n", coinsNum);
}