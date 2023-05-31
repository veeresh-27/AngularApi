namespace WebAPIAngular.Models
{
    public interface IDBOperations
    {
        List<TblHotel> GetAllHotels();

        TblHotel GethotelById(int id);
        bool Addhotel(TblHotel hotel);
        bool Deletehotel(int id);
        bool Updatehotel(TblHotel hotel);
    }
    public class HandleDBComp : IDBOperations
    {
        HotelDBConnect context = new HotelDBConnect();
        public bool Addhotel(TblHotel hotel)
        {
            //  var hotList = context.Hotels.ToList();
            try
            {
                Console.WriteLine(hotel);
                TblHotel hot = new TblHotel();
                hot.menu = hotel.menu;
                hot.price = hotel.price;

                context.Hotels.Add(hot);
                context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool Deletehotel(int id)
        {
            var hotList = context.Hotels.ToList();
            try
            {
                var hot = hotList.FirstOrDefault((ele) => ele.id == id);
                if (hot != null)
                {
                    context.Hotels.Remove(hot);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {

                return true;
            }
        }

        public List<TblHotel> GetAllHotels()
        {
            return context.Hotels.ToList();
        }

        public TblHotel GethotelById(int id)
        {

            var hot = context.Hotels.FirstOrDefault((ele) => ele.id == id);
            if (hot != null)
            {
                return hot;
            }
            return new TblHotel();


        }

        public bool Updatehotel(TblHotel hotel)
        {
            try
            {

                var hot = context.Hotels.FirstOrDefault((ele) => ele.id == hotel.id);
                if (hot != null)
                {
                    hot.menu = hotel.menu;
                    hot.price = hotel.price;
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                return true;
            }

        }
    }
}
