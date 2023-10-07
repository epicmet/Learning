import java.util.List;
import java.util.Random;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class FlightService {
    public CompletableFuture<Quote> getQuote(String site) {
        return CompletableFuture.supplyAsync(() -> {
            System.out.println("Getting a quote form " + site);

            var random = new Random();
            var price =  100 + random.nextInt(10);

            LongTask.simulate(1000 + random.nextInt(2000));

            return new Quote(site, price);
        });
    }

    public Stream<CompletableFuture<Quote>> getQuotes() {
        var sites = List.of("site1", "site2", "site3");

        return sites
            .stream()
            .map(this::getQuote);
    }
}
