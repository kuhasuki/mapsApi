class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
    render :index
  end

  def show
    @bench = Bench.find(params[:id])
    render :show
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save!
    end
  end

  def bench_params
    params.require(:bench).permit(:description, :lat, :lon)
  end
end
