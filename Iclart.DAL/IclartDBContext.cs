using Iclart.Common.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iclart.DAL
{
    public class IclartDBContext : DbContext
    {
        public IclartDBContext() : base("DefaultConnection")
        {            
            Database.SetInitializer(new MyDbInit());
        }
     
        public DbSet<Client> Clients { get; set; }       

    }
    public class MyDbInit : CreateDatabaseIfNotExists<IclartDBContext>
    {
        protected override void Seed(IclartDBContext context)
        {
            base.Seed(context);
        }
    }
}
