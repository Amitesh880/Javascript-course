-- AddForeignKey
ALTER TABLE "public"."Todos" ADD CONSTRAINT "Todos_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
