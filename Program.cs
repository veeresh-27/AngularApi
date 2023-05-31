using WebAPIAngular.Models;

namespace WebAPIAngular
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddTransient<IDBOperations, HandleDBComp>();

            builder.Services.AddControllers();
            builder.Services.AddCors((options) =>
            {
                options.AddPolicy("cors", options =>
                {
                    options.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod();
                });
            });


            var app = builder.Build();
            app.UseCors("cors");

            builder.Services.AddControllers();

           

            // Configure the HTTP request pipeline.

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}